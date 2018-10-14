import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import {HelloWorldService} from './services/hello-world.service';

@NgModule({
  imports: [
  ],
  declarations: [MyLibComponent],
  exports: [MyLibComponent],
  providers: [HelloWorldService]
})
export class MyLibModule { }
