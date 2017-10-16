const qrOverlay = (imageData) => {

    const parent = document.createElement("div");
    parent.style.zIndex = 9999;
    parent.style.opacity = 0.8;
    parent.style.width = "100%";
    parent.style.height = "100%";
    parent.style.background = "#000";
    parent.style.position = "absolute";
    parent.style.top = 0;
    parent.style.left = 0;
    parent.style.alignItems = "center";
    parent.style.justifyContent = "center";

    const image = document.createElement("img");
    image.style.width = "400px";
    image.style.height = "400px";
    image.setAttribute("src", imageData);

    parent.appendChild(image);

    return parent;
};

export {qrOverlay};