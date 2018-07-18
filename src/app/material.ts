import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule,
                MatCardModule
            ],

    exports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule,
                MatCardModule
            ],
})

export class MaterialModule { };
