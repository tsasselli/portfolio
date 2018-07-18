import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule
            ],

    exports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule
            ],
})

export class MaterialModule { };
