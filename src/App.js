import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categiries from "./components/Categiries";
import ShowFullItem from "./components/ShowFullItem";

class App extends Component {

constructor(props){
  super(props)
  this.state= {
    orders: [],
    currentItems: [],
    items: [
      {
        id: 2,
        title: 'wooden table',
        img: 'table-wood.jpeg',
        desc: 'Elegant wooden dining table',
        category: 'tables',
        price: 129.99
      },
      {
        id: 3,
        title: 'modern lamp',
        img: 'lamp-modern.jpeg',
        desc: 'Stylish modern floor lamp',
        category: 'lighting',
        price: 39.99
      },
      {
        id: 4,
        title: 'blue sofa',
        img: 'sofa-blue.jpeg',
        desc: 'Comfortable blue fabric sofa',
        category: 'sofas',
        price: 299.99
      },
      {
        id: 5,
        title: 'bookshelf',
        img: 'bookshelf.jpeg',
        desc: 'Spacious wooden bookshelf',
        category: 'storage',
        price: 89.99
      },
      {
        id: 6,
        title: 'wall clock',
        img: 'clock-wall.jpeg',
        desc: 'Minimalist wall clock',
        category: 'decor',
        price: 24.99
      },
      {
        id: 7,
        title: 'area rug',
        img: 'rug-area.jpeg',
        desc: 'Soft patterned area rug',
        category: 'decor',
        price: 59.99
      },
      {
        id: 8,
        title: 'kitchen stool',
        img: 'stool-kitchen.jpeg',
        desc: 'Compact kitchen counter stool',
        category: 'chairs',
        price: 34.99
      },
      {
        id: 9,
        title: 'bedside table',
        img: 'table-bedside.jpeg',
        desc: 'Small nightstand with drawer',
        category: 'bedroom',
        price: 44.99
      },
      {
        id: 10,
        title: 'floor mirror',
        img: 'mirror-floor.jpeg',
        desc: 'Full-length floor mirror',
        category: 'decor',
        price: 74.99
      }    
    ],
    showFullItem: false,
    fullItem: {}
  }
  this.state.currentItems= this.state.items
  this.addToOrder= this.addToOrder.bind(this)
  this.deleteOrder= this.deleteOrder.bind(this)
  this.chooseCategory= this.chooseCategory.bind(this)
  this.onShowItem= this.onShowItem.bind(this)
}

  render(){
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categiries chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  addToOrder (item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders:[...this.state.orders, item]}
    )
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

}

export default App;
