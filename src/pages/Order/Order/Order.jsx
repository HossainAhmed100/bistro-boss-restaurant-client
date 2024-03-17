import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Order.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';
import orderImg from "../../../assets/shop/order.jpg";
import { useParams } from 'react-router-dom';

const Order = () => {
    const [menu] = useMenu();
    const categories = ["salad","pizza", "soup","desserts","drinks"];
    const {category} = useParams();
    const initialState = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialState);
    const drinks = menu.filter(item => item.category === "drinks");
    const pizza = menu.filter(item => item.category === "pizza");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
  return (
    <section>
      <Helmet title='Bistro Boss | Order Our Food'/>
      <Cover img={orderImg} coverTitle={"OUR MENU"}/>
      <div className='my-10'>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUP</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel><OrderTab item={salad}/></TabPanel>
            <TabPanel><OrderTab item={pizza}/></TabPanel>
            <TabPanel><OrderTab item={dessert}/></TabPanel>
            <TabPanel><OrderTab item={soup}/></TabPanel>
            <TabPanel><OrderTab item={drinks}/></TabPanel>
        </Tabs>
    </div>
    </section>
  )
}

export default Order
