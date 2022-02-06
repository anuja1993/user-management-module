import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './pages/user-view.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { UserItemComponent } from './components/user-item/user-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [UserViewComponent, UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class UserModule {}
