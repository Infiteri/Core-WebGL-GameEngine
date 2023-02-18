import core, { gl } from '../core.js'

/**
 * @namespace core
 *
 * @description
 */

/**
 * @namespace core
 *
 * @description
 */
export class Camera {
  constructor() {
    this.projection = core.Matrix4x4.OrthoGraphic(
      0,
      gl.canvas.width,
      gl.canvas.height,
      0,
      1000,
      -10
    )

    //Position
    this.position = new core.Vector3(0, 0, 0)

    this.model = core.Matrix4x4.Translation(this.position)
  }

  Recalculate() {
    this.projection = core.Matrix4x4.OrthoGraphic(
      0,
      gl.canvas.width,
      gl.canvas.height,
      0,
      1000,
      -10
    )

    this.model = core.Matrix4x4.Translation(this.position)
  }

  GetMatrix() {
    this.Recalculate()
    return core.Matrix4x4.Multiply(this.projection, this.model).ToFloat32Array()
  }
}
