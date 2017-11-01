import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Category } from "./../../../shared/models/category.model";
import { CategoriesService } from "./../../../shared/services/categories.service";

@Component({
  selector: "add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnInit {

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private CategoriesService: CategoriesService) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;

    const category = new Category(name, capacity);

    this.CategoriesService
      .addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({capasyty: 1});
        this.onCategoryAdd.emit(category);
      });
  }
}
