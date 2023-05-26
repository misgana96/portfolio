import React, {Component} from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Toolbar } from '@mui/material';
import ProfileLogo from '../../assets/images/profile_logo.jpg'
import Zigzag from '../../assets/images/zigzag.png'
import ZigzagIcon from '../../assets/images/zigzag_icon.png'
import Work from '../../assets/images/work.png'
import Stack from '@mui/material/Stack';
import CircleIcon from '../../assets/images/circle.png'
import './styles.css'
const LandingPage = () => {

    const pages = ["Services", "Works", "Skill"]
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    return (
        <Box className="container-content">
            <AppBar position="fixed" sx={{backgroundColor: "#F8F7F1"}}
            elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}>
                                {pages.map((page) => (
                                    <MenuItem key={page}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}  
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button variant="text"
                        sx={{ my: 2, color: 'black', display: 'block',
                        fontFamily: 'Shalimar, cursive', fontSize: 48, fontWeight: 400 }}>
                        Misgana
                        </Button>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, ml: 10, color: 'black', display: 'block',
                                fontFamily: 'Shalimar, cursive', fontWeight: 400 }}
                        >
                            {page}
                        </Button>
                        ))}
                        <Button variant="text">                      
                            <Typography variant="h6"
                                textAlign="center"
                                sx={{ my: 2, ml: 25, color: 'black', display: 'block',
                                fontFamily: 'Shalimar, cursive', fontWeight: 400 }}>
                                misganayoseph@gmail.com
                            </Typography>
                            <EmailRoundedIcon sx={{ml: 2}}/>
                        </Button>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{marginTop: 20, mx: 10, display: 'flex'}}>
                <Avatar src={ProfileLogo} sx={{width: 164, height: 194}} />
                <Typography variant="h5" sx={{fontFamily: "Belleza, cursive", fontSize: 64, fontWeight: 400, ml: 5, mt: 2}} >
                    Hi There <br/>
                    I’m Misgana
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', marginTop: 10, mx: 10}} width={600}>
                    <Typography width={488} textAlign="center" color="initial" sx={{fontFamily: "Belleza", fontSize: 20}}>
                        I am a web developer. I develop web applications using React Js, Vue Js, Bootstrap, WordPress, Kajabi, 
                        HTML, CSS, JavaScript, TypeScript, and flutter for front-end developement and for back-end using loopback, django, 
                        gRPC, laravel, and python
                    </Typography>
                    <Typography width={488} textAlign="center" color="#286F6C" sx={{fontFamily: "Belleza", fontSize: 20, mt: 5}}>
                        I am young, energetic, passionate, skilled, and who always ready to learn new technologies
                    </Typography>
                    <Box sx={{display: 'flex'}}>
                        <Stack direction="row">
                            <img className='circle-icon' src={CircleIcon} />
                            <img className='zigzag-icon' src={ZigzagIcon} />
                        </Stack>

                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}} width={600}>
                    <Box>
                        <img className='zigzag' src={Zigzag} />
                    </Box>
                    <Box width={488} className="what-help">
                                <Typography variant="h3" color="initial" sx={{fontFamily: "Belleza", fontSize: 80}}>
                                    what do i help
                                </Typography>
                                <Typography variant="h6" color="initial" sx={{fontFamily: "Belleza", fontSize: 20, color: '#134776', textAlign: 'center', marginTop: 5}}>
                                    i will help you with finding solution and solve your problems,  design goods that give customers fulfilling and delightful experiences. am interested in every aspect of product design, including branding, usability, and design. create interfaces for software and other electronic devices.
                                </Typography>
                            </Box>
                </Box>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 80, color: '#134776', textAlign: 'center', marginTop: 5}}
                >What I can do</Typography>
                <Typography variant="h5" color="initial" sx={{fontFamily: "Belleza", textAlign: 'center', marginTop: 5}}>
                    Below is just a high-level list of the languages / tools that I'm familiar with.
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', columnGap: 30}}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>JavaScript</li>
                        <li>Tailwind Css</li>
                        <li>Bootstrap</li>
                        <li>TypeScript</li>
                    </ul>
                    <ul>
                        <li>Vue Js</li>
                        <li>React Js</li>
                        <li>Wordpress</li>
                        <li>Kajabi</li>
                        <li>gRPC</li>
                        <li>Loopback</li>
                    </ul>
                </Box>
            </Box>
            <Box className="work" sx={{backgroundColor: "#F5EBE0"}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 80, color: '#134776', textAlign: 'center', marginTop: 5}}
                >Work and Experiences </Typography>
                <img className='exprience' src={Work} width={690} />
            </Box>
        </Box>
    )
}   

export default LandingPage