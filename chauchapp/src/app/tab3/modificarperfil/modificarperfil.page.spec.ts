import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarperfilPage } from './modificarperfil.page';

describe('ModificarperfilPage', () => {
  let component: ModificarperfilPage;
  let fixture: ComponentFixture<ModificarperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
