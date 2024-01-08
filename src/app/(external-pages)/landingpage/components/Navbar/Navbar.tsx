'use client';
import React, { useState } from 'react';
import Tabs from '@/components/common/Tabs/Tabs';
import './style.scss';
import { motion } from "framer-motion";
import logo from '../../../../../../public/Logo Main.png'

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
    const tabs = ['Home', 'Contact', 'Team','Terms of Services',];
    const [activeTab, setActiveTab] = useState('Home');
   

    const handleMenuToggle = () => {
      toggleMenu(); // Add this line to toggle the menu
    };
  
    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    const containerNav = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
      };
      const menuIcon = {
        closed: { rotate: 0 },
        open: { rotate: 0, transition: {
            delay: 0.2,
          },  },
      };
    
      const line1 = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -135, x: 3.5 },
      };
    
      const line2 = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 135, x: 3.5,y:-9},
      };
      const mobileTabsContainer = {
        hidden: { y: 0 },
        visible: { y: -35, transition: { duration: 0.5 } },
      };
    
      const tabsContainerAnimation = {
        hidden: { opacity: 0, transition: { duration: 0.8 } },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      };
      return (
        <div
          className="navcontainer"
        >
         <motion.div   
          variants={containerNav}
          initial="hidden"
          animate="visible" className='desktopNav'>
          <div className='desktopNav-logo'>
            <img src={logo.src} width={50}/>
          </div>
    
          <div className='desktopNav-tabsContainer'>
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} tabs={tabs} />
          </div>
    
          <div className='mobileNav-menuBtn' onClick={handleMenuToggle}>
          <motion.div
            className='menu-icon'
            initial={false}
            animate={isMenuOpen ? 'open' : 'closed'}
             variants={menuIcon}
          >
         <motion.div className='line' variants={line1} />
         <motion.div className='line' variants={line2} />
        </motion.div>
          </div>
          </motion.div>

          {/* mobile nav */}
          {isMenuOpen && (
          <motion.div
          className="mobileNav-tabsContainer"
          variants={mobileTabsContainer}
          initial="hidden"
          animate="visible"
         >
          <motion.div
            variants={tabsContainerAnimation}
            initial="hidden"
            animate="visible"
          >
            <Tabs activeTab={activeTab} onTabChange={handleTabChange} tabs={tabs} />
          </motion.div>
        </motion.div>
      )}
        </div>
      );
    };
export default Navbar;
