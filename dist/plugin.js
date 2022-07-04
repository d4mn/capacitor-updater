var capacitorCapacitorUpdater = (function (exports, core) {
    'use strict';

    const CapacitorUpdater = core.registerPlugin('CapacitorUpdater', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorUpdaterWeb()),
    });

    class CapacitorUpdaterWeb extends core.WebPlugin {
        async download(options) {
            console.log('Cannot download version in web', options);
            return { version: "" };
        }
        async set(options) {
            console.log('Cannot set version in web', options);
        }
        async getId() {
            console.log('Cannot get ID in web');
            return { id: 'default' };
        }
        async getPluginVersion() {
            console.log('Cannot get version in web');
            return { version: 'default' };
        }
        async delete(options) {
            console.log('Cannot delete version in web', options);
        }
        async list() {
            console.log('Cannot list version in web');
            return { versions: [] };
        }
        async reset(options) {
            console.log('Cannot reset version in web', options);
        }
        async current() {
            console.log('Cannot get current version in web');
            return { current: 'default', currentNative: '0.0.0' };
        }
        async reload() {
            console.log('Cannot reload current version in web');
            return;
        }
        async versionName() {
            console.log('Cannot get current versionName in web');
            return { versionName: 'default' };
        }
        async notifyAppReady() {
            console.log('Cannot notify App Ready in web');
            return;
        }
        async delayUpdate() {
            console.log('Cannot delay update in web');
            return;
        }
        async cancelDelay() {
            console.log('Cannot cancel delay update in web');
            return;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorUpdaterWeb: CapacitorUpdaterWeb
    });

    exports.CapacitorUpdater = CapacitorUpdater;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
