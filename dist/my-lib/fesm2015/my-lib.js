import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyLibService {
    constructor() { }
}
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MyLibService.ctorParameters = () => [];
/** @nocollapse */ MyLibService.ngInjectableDef = defineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
MyLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HelloWorldService {
    constructor() { }
    /**
     * @return {?}
     */
    helloWorld() {
        /** @type {?} */
        const variable = 'Hello World';
        return variable;
    }
}
HelloWorldService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HelloWorldService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [MyLibComponent],
                exports: [MyLibComponent],
                providers: [HelloWorldService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HelloWorldService, MyLibService, MyLibComponent, MyLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1saWIvbGliL215LWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teS1saWIvbGliL215LWxpYi5jb21wb25lbnQudHMiLCJuZzovL215LWxpYi9saWIvc2VydmljZXMvaGVsbG8td29ybGQuc2VydmljZS50cyIsIm5nOi8vbXktbGliL2xpYi9teS1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW15LWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteS1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGhlbGxvV29ybGQgKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gJ0hlbGxvIFdvcmxkJztcbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbXktbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlbGxvV29ybGRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2hlbGxvLXdvcmxkLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW015TGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015TGliQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbSGVsbG9Xb3JsZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEO0lBS0UsaUJBQWlCOzs7O0lBRWpCLFVBQVU7O1FBQ1IsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQy9CLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7WUFSRixVQUFVOzs7Ozs7Ozs7QUNGWDs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUNSO2dCQUNELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUN6QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQjs7Ozs7Ozs7Ozs7Ozs7OyJ9