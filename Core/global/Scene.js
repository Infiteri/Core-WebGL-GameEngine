import core from '../core.js'

export class Scene {
  constructor() {
    this.root = new core.Node2D('__ROOT__')
  }

  Init() {
    this.root.Init()
  }

  Render() {
    this.root.Render()
  }

  Update() {
    this.root.Update()
  }
}
