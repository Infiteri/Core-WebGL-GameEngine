import core from '../core.js'
import { Component } from './Component.js'

export class MeshComponent extends Component {
  constructor(name, materialName) {
    super(name)

    this.mesh = new core.Mesh(materialName)
  }

  Init() {
    this.mesh.Init()
  }

  Render() {
    this.mesh.Render(this.parent.worldMatrix)
  }

  Update() {}
}
