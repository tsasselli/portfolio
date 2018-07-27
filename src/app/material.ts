import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatListModule, MatSidenavModule, MatCardModule, MatInputModule, MatDialogModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule,
                MatCardModule,
                MatInputModule,
                MatDialogModule,
                MatFormFieldModule,


            ],

    exports: [
                MatButtonModule,
                MatCheckboxModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatSidenavModule,
                MatCardModule,
                MatInputModule,
                MatDialogModule,
                MatFormFieldModule,

            ],
})

export class MaterialModule { };
