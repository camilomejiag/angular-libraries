import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    MyLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    MyLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
    return MyLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
    }
    /**
     * @return {?}
     */
    MyLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MyLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-my-lib',
                    template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MyLibComponent.ctorParameters = function () { return []; };
    return MyLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HelloWorldService = /** @class */ (function () {
    function HelloWorldService() {
    }
    /**
     * @return {?}
     */
    HelloWorldService.prototype.helloWorld = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var variable = 'Hello World';
        return variable;
    };
    HelloWorldService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    HelloWorldService.ctorParameters = function () { return []; };
    return HelloWorldService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [MyLibComponent],
                    exports: [MyLibComponent],
                    providers: [HelloWorldService]
                },] },
    ];
    return MyLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HelloWorldService, MyLibService, MyLibComponent, MyLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1saWIvbGliL215LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWIvbGliL215LWxpYi5jb21wb25lbnQudHMiLCJuZzovL215LWxpYi9saWIvc2VydmljZXMvaGVsbG8td29ybGQuc2VydmljZS50cyIsIm5nOi8vbXktbGliL2xpYi9teS1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW15LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteS1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGhlbGxvV29ybGQgKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gJ0hlbGxvIFdvcmxkJztcbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXktbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlbGxvV29ybGRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2hlbGxvLXdvcmxkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015TGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbSGVsbG9Xb3JsZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsaUNBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDhDQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O3lCQVZEOzs7Ozs7O0FDQUE7SUFLRTtLQUFpQjs7OztJQUVqQixzQ0FBVTs7O0lBQVY7O1FBQ0UsSUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQy9CLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOztnQkFSRixVQUFVOzs7OzRCQUZYOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDL0I7O3NCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=