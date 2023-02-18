import { Component } from '../components/Component.js'
import core from '../core.js'

export class Node2D {
  constructor(name) {
    this.name = name

    /** @type {Node2D} */
    this.parent = undefined

    this.transform = new core.Transform()

    this.localMatrix = core.Matrix4x4.Identity()
    this.worldMatrix = core.Matrix4x4.Identity()

    /** @type {Array.<Node2D>} */
    this.children = []

    /** @type {Array.<Component>} */
    this.components = []
  }

  AddChild(node) {
    if (node instanceof Node2D) {
      node.parent = this
      this.children.push(node)
    } else {
      core.Logger.Error(
        `Unable to add node: ${node.name}, not a Node2D instance`
      )
    }
  }

  AddComponent(component) {
    component.parent = this
    component.Init()
    this.components.push(component)
  }

  Init() {
    for (const c of this.components) {
      c.Init()
    }

    for (const c of this.children) {
      c.Init()
    }
  }

  Render() {
    this.localMatrix = this.transform.GetMatrix()
    this.UpdateMatrix(this.parent ? this.parent.localMatrix : undefined)

    for (const c of this.components) {
      c.Render()
    }

    for (const c of this.children) {
      c.Render()
    }
  }

  Update() {
    for (const c of this.components) {
      c.Update()
    }

    for (const c of this.children) {
      c.Update()
    }
  }

  UpdateMatrix(parentMatrix) {
    if (parentMatrix) {
      this.worldMatrix = core.Matrix4x4.Multiply(parentMatrix, this.localMatrix)
    } else {
      this.worldMatrix.CopyFrom(this.localMatrix)
    }
  }
}
