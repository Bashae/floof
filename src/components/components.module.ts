import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { AppHeaderComponent } from './app-header/app-header';
@NgModule({
	declarations: [PostComponent,
    AppHeaderComponent],
	imports: [],
	exports: [PostComponent,
    AppHeaderComponent]
})
export class ComponentsModule {}
