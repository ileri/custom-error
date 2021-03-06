const stackSeparator = `\n${' '.repeat(4)}at `

export default class {
  constructor (name, message, trace) {
    let stack

    if (typeof trace === 'undefined') {
      const tmp = new Error()

      if (tmp.stack) {
        stack = tmp.stack
      }
    } else if (Array.isArray(trace)) {
      stack = trace.map((pos) => `${pos.file}:${pos.line}:${pos.column}`).join(stackSeparator)
    } else {
      stack = trace
    }

    Object.defineProperties(this, {
      name: name,
      message: message,
      stack: stack
    })
  }

  toString () {
    return `${this.name}: ${this.message}`
  }
}
