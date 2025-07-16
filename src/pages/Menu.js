import React, { useState } from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'individual', name: 'Individual' },
    { id: 'board', name: 'Boards' },
    { id: 'group', name: 'Group' },
    { id: 'event', name: 'Events' },
    { id: 'custom', name: 'Custom' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? MenuList 
    : MenuList.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-header">
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-subtitle">
            Discover our handcrafted charcuterie boards and grazing tables, 
            perfect for any occasion
          </p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
              serves={menuItem.serves}
              category={menuItem.category}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-items">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;