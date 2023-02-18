import core from '../Core/core.js'

/**
 * @namespace core
 *
 * @description
 */
export default class Application {
  constructor() {
    this.engine = new core.Engine()
    this.renderer = this.engine.renderer

    this.scene = new core.Scene()

    //Upload texture for easy use
    this.color = new core.ColorMaterial('Mats', new core.Color(255, 255, 255))
    core.MaterialManager.Upload(this.color)

    this.node = new core.Node2D('Nodder')
    this.node2 = new core.Node2D('Nodder2')

    //Component
    const mesh = new core.MeshComponent('Hello', 'Mats')
    this.node.AddComponent(mesh)

    //transform
    this.node.transform.position.x = 50
    this.node.transform.position.y = 50

    this.scene.root.AddChild(this.node)

    this.renderer.ChangeScene(this.scene)
  }

  /** @private */
  Init() {
    this.engine.Init()
  }

  /** @private */
  Render() {
    this.engine.Render()

    this.node.transform.rotation++
  }

  /** @private */
  Update() {
    this.engine.Update()
  }

  /** @private */
  Loop() {
    this.Render()
    this.Update()

    //Temporary camera movement
    if (core.Keyboard.IsKeyDown('KeyA')) {
      this.engine.camera.position.x += 10
    }

    if (core.Keyboard.IsKeyDown('KeyD')) {
      this.engine.camera.position.x -= 10
    }

    if (core.Keyboard.IsKeyDown('KeyW')) {
      this.engine.camera.position.y += 10
    }

    if (core.Keyboard.IsKeyDown('KeyS')) {
      this.engine.camera.position.y -= 10
    }

    requestAnimationFrame(this.Loop.bind(this))
  }

  Run() {
    this.Init()
    this.Loop()
  }
}
