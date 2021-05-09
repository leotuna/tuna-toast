class Toast {
  constructor() {
    this.init()
  }

  readonly container: string = "toast-container"

  private id: number = 0

  public success = (message: string): void => {
    this.run(message, "toast--success")
  }

  public error = (message: string): void => {
    this.run(message, "toast--error")
  }

  public close = (id: string): void => {
    const element = document.getElementById(id)
    
    if (!element) {
      return
    }

    element.remove()
  }

  private autoClose = (id: string, time: number = 3000): void => {
    setTimeout(() => this.close(id), time)
  }

  private run = (message: string, className: string): void => {
    var toast = document.createElement("div")

    toast.classList.add("toast", className)

    toast.innerText = message

    toast.id = `toast-${this.id}`
    
    toast.onclick = () => this.close(toast.id)

    this.id++

    const container = document.getElementById(this.container)

    if (!container) {
      throw new Error("Could not find toast container to append toast message.")
    }

    container.appendChild(toast)

    this.autoClose(toast.id)
  }

  private init = (): void => {
    const body = document.querySelector("body")

    if (!body) {
      throw new Error("Could not find body to append toast container.")
    }

    body.insertAdjacentHTML("beforeend", "<div id='toast-container'></div>")
  }
}

export const toast = new Toast()