export default class Controller {
  #view;
  #camera;
  #worker;
  #blinkCounter = {
    leftEye: 0,
    rightEye: 0,
  };
  constructor({ view, worker, camera }) {
    this.#view = view;
    this.#camera = camera;
    this.#worker = this.#configureWorker(worker);

    this.#view.configureOnBtnClick(this.onBtnStart.bind(this));
  }

  static async initialize(deps) {
    const controller = new Controller(deps);
    controller.log("not yet detecting eye blink! click in the button to start");
    return controller.init();
  }

  #configureWorker(worker) {
    let ready = false;
    worker.onmessage = ({ data }) => {
      if ("READY" === data) {
        console.log("worker is ready!");
        this.#view.enableButton();
        ready = true;
        return;
      }
      const { rightEye, leftEye } = data.blinked;
      this.#blinkCounter = {
        leftEye: rightEye
          ? this.#blinkCounter.leftEye + 1
          : this.#blinkCounter.leftEye,
        rightEye: leftEye
          ? this.#blinkCounter.rightEye + 1
          : this.#blinkCounter.rightEye,
      };
      this.#view.togglePlayVideo();
    };

    return {
      send(msg) {
        if (!ready) return;
        worker.postMessage(msg);
      },
    };
  }
  async init() {
    console.log("init!!");
  }

  loop() {
    const video = this.#camera.video;
    const img = this.#view.getVideoFrame(video);
    this.#worker.send(img);
    this.log(`detecting eye blink...`);
    setTimeout(() => this.loop(), 100);
  }
  log(text) {
    const times = `      - left: ${this.#blinkCounter.leftEye}      - right: ${
      this.#blinkCounter.rightEye
    }`;
    this.#view.log(`status: ${text}`.concat(this.#blinkCounter ? times : ""));
  }

  onBtnStart() {
    this.log("initializing detection...");
    this.#blinkCounter = {
      leftEye: 0,
      rightEye: 0,
    };
    this.loop();
  }
}
