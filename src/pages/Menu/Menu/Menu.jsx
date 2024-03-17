import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === "offered");
  const pizza = menu.filter(item => item.category === "pizza");
  const dessert = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  return (
    <div>
      <Helmet title='Bistro Boss | Our Menu'/>
      <Cover img={menuImg} coverTitle={"OUR MENU"}/>
      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}/>
      <MenuCategory category={"drinks"} menuItem={offered} menuBtnTitle={"ORDER YOUR FAVOURITE FOOD"}/>
      <Cover img={pizzaImg} coverTitle={"PIZZA"}/>
      <MenuCategory category={"pizza"} menuItem={pizza} menuBtnTitle={"ORDER YOUR FAVOURITE FOOD"}/>
      <Cover img={dessertImg} coverTitle={"DESSERTS"}/>
      <MenuCategory category={"desserts"} menuItem={dessert} menuBtnTitle={"ORDER YOUR FAVOURITE FOOD"}/>
      <Cover img={soupImg} coverTitle={"SOUP"}/>
      <MenuCategory category={"soup"} menuItem={soup} menuBtnTitle={"ORDER YOUR FAVOURITE FOOD"}/>
      <Cover img={saladImg} coverTitle={"SALAD"}/>
      <MenuCategory category={"salad"} menuItem={soup} menuBtnTitle={"ORDER YOUR FAVOURITE FOOD"}/>
    </div>
  )
}

export default Menu
