class GameCore
{
    constructor (canvas, fps)
    {
        this.canvas = canvas;
        this.fps = fps;
        this.scenes = new Array();

        this.context = this.canvas.getContext("2d");

        this.LoadContent();
        this.RunGameLoop();
    }

    LoadContent ()
    {

    }

    Update ()
    {
        this.Draw();
    }

    Draw ()
    {

    }

    RunGameLoop(fps)
    {
        window.setInterval(this.Update, 1000 / fps);
    }
}