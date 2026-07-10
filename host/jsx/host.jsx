/**
 * MotionGraph Pro
 * ExtendScript Host Bridge
 */

function ping() {
    return JSON.stringify({
        success: true,
        message: "MotionGraph Pro Bridge Connected"
    });
}

function getAppVersion() {
    return JSON.stringify({
        success: true,
        version: app.version
    });
}

function helloAE() {
    return JSON.stringify({
        success: true,
        message: "Hello from Adobe After Effects!"
    });
}

function getActiveComp() {
    var comp = app.project.activeItem;

    if (comp && comp instanceof CompItem) {
        return JSON.stringify({
            success: true,
            name: comp.name,
            width: comp.width,
            height: comp.height,
            duration: comp.duration,
            frameRate: comp.frameRate
        });
    }

    return JSON.stringify({
        success: false,
        message: "No active composition."
    });
}