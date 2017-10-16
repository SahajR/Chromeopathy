import QR from "qrious";
import{qrOverlay} from "./elements";

chrome.runtime.onMessage.addListener((request) => {
    generateQR(request.text);
});

const generateQR = (value) => {

    if(typeof string !== "string") {
        throw "Invalid text";
    }

    const qr = new QR({
        value
    });

    const overlay = qrOverlay(qr.toDataURL());
    document.body.appendChild(overlay);

};

