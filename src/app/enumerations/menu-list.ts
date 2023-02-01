export class MenuItem {
  constructor(
    public name: string,
    public route: string,
    public toolTip: string,
    public icon: string
  ) {}
}

export const menuList = [
  new MenuItem(
    'Início',
    'inicio',
    'Início',
    'home'
  ),
  new MenuItem(
    'Farmácias',
    'farmacia',
    'Farmácias',
    'medication'
  ),
  new MenuItem(
    'Preços',
    'preco',
    'Preços',
    'payments'
  ),
  new MenuItem(
    'Conta',
    'conta',
    'Minha Conta',
    'person'
  )
];
