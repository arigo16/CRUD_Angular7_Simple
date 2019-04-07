import { Component, OnInit, TemplateRef } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'

import { ReligionService } from './services/religion.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ReligionService
  ]
})

export class AppComponent implements OnInit {
  isLoadingList: boolean
  isLoadingAdd: boolean
  isLoadingEdit: boolean
  isLoadingDel: boolean

  addDialog: BsModalRef
  editDialog: BsModalRef
  delDialog: BsModalRef

  id_edit: number
  id_del: number

  description_add: string
  description_edit: string
  description_del: string

  list_religion = []

  constructor(
    private modalService: BsModalService,
    private religionService: ReligionService
  ) {
    this.isLoadingAdd = false
    this.isLoadingEdit = false
    this.isLoadingDel = false
  }

  ngOnInit(): void {
    this.loadListReligion()
  }

  loadListReligion() {
    this.isLoadingList = true

    let ParamReq = "1"

    this.religionService.loadListReligion(ParamReq)
      .subscribe((result: any) => {
        if (result.status == 200) {
          this.list_religion = result.list_data

          this.isLoadingList = false
        } else {
          console.log("Ini buat listen status lainnya")

          this.isLoadingList = false
        }
      }, _error => {
        if (_error.error.code == 0) {
          console.log("Ini status tidak ada koneksi")

          this.isLoadingList = false
        } else if (_error.status == 401) {
          console.log("Ini status 401 di header Unauthrorized")

          this.isLoadingList = false
        } else {
          console.log("Ini status lainnya")

          this.isLoadingList = false
        }
      })
  }

  addReligionModal(template: TemplateRef<any>) {
    this.addDialog = this.modalService.show(template)
  }

  addReligionFunction() {
    this.isLoadingAdd = true

    let ParamReq = {
      user_id: 1,
      description: this.description_add.toLowerCase()
    }

    this.religionService.AddReligion(ParamReq)
      .subscribe((result: any) => {
        if (result.status == 200) {
          this.addDialog.hide()

          this.loadListReligion()

          this.isLoadingAdd = false
        } else {
          console.log("Ini buat listen status lainnya")

          this.isLoadingAdd = false
        }
      }, _error => {
        if (_error.error.code == 0) {
          console.log("Ini status tidak ada koneksi")

          this.isLoadingAdd = false
        } else if (_error.status == 401) {
          console.log("Ini status 401 di header Unauthrorized")

          this.isLoadingAdd = false
        } else {
          console.log("Ini status lainnya")

          this.isLoadingAdd = false
        }
      })
  }

  editReligionModal(template: TemplateRef<any>, id: number, description: string) {
    this.id_edit = id
    this.description_edit = description

    this.editDialog = this.modalService.show(template)
  }

  editReligionFunction() {
    this.isLoadingEdit = true

    let ParamReq = {
      user_id: 1,
      id: this.id_edit,
      description: this.description_edit.toLowerCase()
    }

    this.religionService.EditReligion(ParamReq)
      .subscribe((result: any) => {
        if (result.status == 200) {
          this.editDialog.hide()

          this.loadListReligion()

          this.isLoadingEdit = false
        } else {
          console.log("Ini buat listen status lainnya")

          this.isLoadingEdit = false
        }
      }, _error => {
        if (_error.error.code == 0) {
          console.log("Ini status tidak ada koneksi")

          this.isLoadingEdit = false
        } else if (_error.status == 401) {
          console.log("Ini status 401 di header Unauthrorized")

          this.isLoadingEdit = false
        } else {
          console.log("Ini status lainnya")

          this.isLoadingEdit = false
        }
      })
  }

  delReligionModal(template: TemplateRef<any>, id: number, description: string) {
    this.id_del = id
    this.description_del = description

    this.delDialog = this.modalService.show(template)
  }

  delReligionFunction() {
    this.isLoadingDel = true

    let ParamReq = {
      user_id: 1,
      id: this.id_del,
      description: this.description_del.toLowerCase()
    }

    this.religionService.DeleteReligion(ParamReq)
      .subscribe((result: any) => {
        if (result.status == 200) {
          this.delDialog.hide()

          this.loadListReligion()

          this.isLoadingDel = false
        } else {
          console.log("Ini buat listen status lainnya")

          this.isLoadingDel = false
        }
      }, _error => {
        if (_error.error.code == 0) {
          console.log("Ini status tidak ada koneksi")

          this.isLoadingDel = false
        } else if (_error.status == 401) {
          console.log("Ini status 401 di header Unauthrorized")

          this.isLoadingDel = false
        } else {
          console.log("Ini status lainnya")

          this.isLoadingDel = false
        }
      })
  }
}