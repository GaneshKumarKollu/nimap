import { Component, Input ,ViewChild, ElementRef} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
    constructor(private readonly userService: UserService) {}
    @Input() savedData: any;
    @ViewChild('fileInput') fileInput: ElementRef | undefined;
    userId: string | undefined;

    items: MenuItem[] | undefined;
    editMode: boolean = false;

    ngOnInit() {
        // Initialize items
        this.items = [
            // Your menu items
        ];
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    saveChanges() {
        this.editMode = false;
        if (this.userId) { // Ensure userId is defined
            this.userService.updateData(this.userId, this.savedData).subscribe({
                next: (response) => {
                    console.log(response); // Log the response from the server
                    // You may want to update the local stored data here if necessary
                },
                error: (error) => {
                    console.log(error);
                }
            });
        } else {
            console.error('User ID not found.'); // Handle the case where userId is not defined
        }
    }

    changePhoto() {
        if (this.fileInput) {
            this.fileInput.nativeElement.click();
        }
    }

    handleFileInput(event: any) {
        const file: File = event.target.files[0];
        // Handle file input if needed
    }
}
