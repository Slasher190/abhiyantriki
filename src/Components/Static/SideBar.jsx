import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, useProSidebar, SidebarHeader } from 'react-pro-sidebar';
import { FaChartArea, FaMapMarked, FaShoppingCart, FaHandHoldingHeart } from "react-icons/fa";
import { RiInkBottleFill, RiBook2Fill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { GiAlienFire } from "react-icons/gi";
import { AiOutlineBars, AiFillCalendar } from "react-icons/ai";
import { Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { slide as menu } from 'react-burger-menu';

const Layout = () => {
	const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
	const [view, setView] = useState(false);

  const handleChange = (event, nextView) => {
    setView(nextView);
    if(view === null){
      collapseSidebar();
    }
    else{
      collapseSidebar();
    }
  };
	return (
		<>
		<div style={{ display: 'flex', height: '100%' }}>
			<Sidebar style={{ backgroundColor: "rgb(249, 249, 249)"}}>
			<ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
      <ToggleButton value="list" aria-label="list" className=".bg-primary.bg-gradient">
        <ViewListIcon />
      </ToggleButton>
      </ToggleButtonGroup>
				<Menu>
					<SubMenu label="Charts" icon={<FaChartArea />}>
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
						<MenuItem> Bar charts </MenuItem>
					</SubMenu>
					<SubMenu label="Map" icon={<FaMapMarked />}>
						<MenuItem>Google Maps</MenuItem>
						<MenuItem>Open Street Maps</MenuItem>

						<SubMenu label="Universe Map" icon={<GiAlienFire />}>
							<MenuItem>Indian Astrology</MenuItem>
							<MenuItem>Greek Astrology</MenuItem>
						</SubMenu>
					</SubMenu>
					<SubMenu label="Theme" icon={<RiInkBottleFill />}>
						<MenuItem>Light</MenuItem>
						<MenuItem>Dark</MenuItem>
					</SubMenu>
					<SubMenu label="Components" icon={<SiStyledcomponents />}>
						<MenuItem>Grid</MenuItem>
						<MenuItem>Layout</MenuItem>
						<MenuItem>Forms</MenuItem>
					</SubMenu>
					<MenuItem icon={<RiBook2Fill />}> Documentation </MenuItem>
					<MenuItem icon={<AiFillCalendar />}> Calendar </MenuItem>
					<MenuItem icon={<FaShoppingCart />}> E-commerce </MenuItem>
					<MenuItem icon={<FaHandHoldingHeart />}> Examples </MenuItem>
				</Menu>
			</Sidebar>

		</div>
		</>
	)
}
export default Layout;