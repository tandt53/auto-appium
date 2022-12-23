import {config} from "./wdio.conf";
import {apiDemo, gallery_android, gallery_ios, uiCatalog, wdio_android, wdio_ios} from "./apps";


const platform = (process.env.PLATFORM || "android").trim();
const app = process.env.APP;

switch (app) {
    case "gallery_android":
        config.capabilities = gallery_android;
        break;
    case "gallery_ios":
        config.capabilities = gallery_ios;
    case "apiDemo":
        config.capabilities = apiDemo;
        break;
    case "uiCatalog":
        config.capabilities = uiCatalog;
        break;
    case "wdio_android":
        config.capabilities = wdio_android;
        break;
    case "wdio_ios":
        config.capabilities = wdio_ios;
        break;

    default:
        throw new Error(`Invalid app: ${app}`);

}


config.hostname = "127.0.0.1";
config.port = 4724;
config.path = "/wd/hub";


config.services = ["shared-store",
];


exports.config = config;
