(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (factory((global['my-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyLibService = (function () {
        function MyLibService() {
        }
        MyLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MyLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
        return MyLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyLibComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var HelloWorldService = (function () {
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        HelloWorldService.ctorParameters = function () { return []; };
        return HelloWorldService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyLibModule = (function () {
        function MyLibModule() {
        }
        MyLibModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.HelloWorldService = HelloWorldService;
    exports.MyLibService = MyLibService;
    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbXktbGliL2xpYi9teS1saWIuc2VydmljZS50cyIsIm5nOi8vbXktbGliL2xpYi9teS1saWIuY29tcG9uZW50LnRzIiwibmc6Ly9teS1saWIvbGliL3NlcnZpY2VzL2hlbGxvLXdvcmxkLnNlcnZpY2UudHMiLCJuZzovL215LWxpYi9saWIvbXktbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teS1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXktbGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBoZWxsb1dvcmxkICgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9ICdIZWxsbyBXb3JsZCc7XG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXlMaWJDb21wb25lbnQgfSBmcm9tICcuL215LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWxsb1dvcmxkU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxsby13b3JsZC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNeUxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeUxpYkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0hlbGxvV29ybGRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzJCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixpQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzZCQVZEOzs7Ozs7O0FDQUE7UUFLRTtTQUFpQjs7OztRQUVqQixzQ0FBVTs7O1lBQVY7O2dCQUNFLElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDL0IsT0FBTyxRQUFRLENBQUM7YUFDakI7O29CQVJGRCxhQUFVOzs7O2dDQUZYOzs7Ozs7O0FDQUE7Ozs7b0JBSUNFLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDekIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQy9COzswQkFWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=