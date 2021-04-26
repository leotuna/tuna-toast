class Toast {
  constructor() {
    this.init()
  }

  readonly container: string = "toast-container"

  private id: number = 0

  public success = (message: string): void => this.run(message, "toast--success")

  public error = (message: string): void => this.run(message, "toast--error")

  public close = (id: string): void => {
    const element = document.getElementById(id)
    
    if (element === null) {
      return
    }

    element.remove()
  }

  private autoClose = (id: string, time: number = 3000): void => {
    setTimeout(() => this.close(id), time)
  }

  private run = (message: string, className: string): void => {
    var elem = document.createElement("div")

    elem.classList.add("toast", className)

    elem.onclick = () => this.close(elem.id)

    elem.innerText = message

    elem.id = `toast-${this.id}`
    
    this.id++

    const element = document.getElementById(this.container)

    if (element === null) {
      return
    }

    element.appendChild(elem)

    this.autoClose(elem.id)
  }

  private init = (): void => {
    const elements = document.getElementsByTagName("body")

    const body = elements[0]

    if (!body) {
      throw new Error("Cannot append toast container to html body.")
    }

    body.insertAdjacentHTML("beforeend", "<div id='toast-container'></div>")
  }
}

export const toast = new Toast()