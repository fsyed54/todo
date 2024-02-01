import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-itodos',
  templateUrl: './itodos.component.html',
  styleUrls: ['./itodos.component.scss'],
})
export class ItodosComponent implements OnInit {
  @ViewChild('menuArray') menuArray: any;
  @ViewChild('menuButton') menuButton: ElementRef;
  selectedTab: string = 'ACTIVE';
  newTodoText: string = '';
  statusOptions = [
    { label: 'In Progress', value: 'In Progress' },
    { label: 'In Hold', value: 'In Hold' },
    { label: 'No More Required', value: 'No More Required' },
    { label: 'Completed', value: 'Completed' }
  ];
  todos: any = [
    {
      "start_date": "02/01/2024",
      "end_date": "02/01/2024",
      "status": 'In Progress',
      "task": "Front-end UI Design"
    },
    {
      "start_date": "02/01/2024",
      "end_date": "02/01/2024",
      "status": 'Completed',
      "task": "Backend Integration"
    },
    {
      "start_date": "02/01/2024",
      "end_date": "02/01/2024",
      "status": 'No More Required',
      "task": "Feature X Development"
    },
    {
      "start_date": "02/01/2024",
      "end_date": "02/01/2024",
      "status": "In Hold",
      "task": "Bug Fixing"
    },
    {
      "start_date": "01/31/2024",
      "end_date": "02/01/2024",
      "status": 'In Progress',
      "task": "Front-end UI Design"
    },
    {
      "start_date": "01/31/2024",
      "end_date": "02/01/2024",
      "status": "Completed",
      "task": "Backend Integration"
    },
    {
      "start_date": "01/31/2024",
      "end_date": "02/01/2024",
      "status": "No More Required",
      "task": "Feature X Development"
    },
    {
      "start_date": "01/31/2024",
      "end_date": "02/01/2024",
      "status": "In Hold",
      "task": "Bug Fixing"
    }
  ]

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTodos();
  }


  onTabChange(event: any) {
    this.selectedTab = event.index === 0 ? 'ACTIVE' : 'COMPLETED';
  }

  addTodo() {
    if (this.newTodoText.trim() !== '') {
      const startDate = new Date();
      const options: any = { month: '2-digit', day: '2-digit', year: 'numeric' };
      const formattedStartDate = startDate.toLocaleDateString('en-US', options);

      const data = {
        "start_date": formattedStartDate,
        "status": 'In Progress',
        "task": this.newTodoText.trim()
      }
      this.todos.push(data);
      this.getTodos();
      this.newTodoText = '';
      this.cdr.detectChanges();
    }
  }
  groupedTasks: any = {};

  getTodos() {
    const groupedTasks = {};
    this.todos.forEach(task => {
      const startDate = task.start_date;
      if (!groupedTasks[startDate]) {
        groupedTasks[startDate] = [];
      }
      groupedTasks[startDate].push(task);
    });
    this.groupedTasks = groupedTasks;
    return this.groupedTasks;
  }

  editAction(event): void {
    // Implement your edit logic here
    console.log('Edit action clicked', event);
  }

  deleteAction(event): void {
    // Implement your delete logic here
    console.log('Delete action clicked', event);
  }

  trackByValue(index: number, item: any): any {
    console.log(index, item);
    return item.value;
  }

  setSelectedStatus(status1) {
    let index = this.statusOptions.findIndex(status => status.value == status1);
    return this.statusOptions[index];
  }

  menuLeft: number;
  menuTop: number;


  showMenu: any = [];

  toggleMenu(index: number, startDate: any): void {
    // Toggle the menu for the clicked row
    console.log(this.groupedTasks)
    console.log(startDate)
    this.groupedTasks[startDate][index]['isOpen'] = !this.groupedTasks[startDate][index]['isOpen'];
    console.log(this.groupedTasks[startDate])
    // Close other menus
    for (let i = 0; i < this.groupedTasks[startDate].length; i++) {
      if (i !== index) {
        this.groupedTasks[startDate][i]['isOpen'] = false;
      }
    }
  }

}
