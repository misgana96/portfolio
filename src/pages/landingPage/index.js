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
import Grid from '@mui/material/Grid';
// import HtmlIcon from '@mui/icons-material/Html';
// import CssIcon from '@mui/icons-material/Css';
import AdbIcon from '@mui/icons-material/Adb';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Paper, Toolbar } from '@mui/material';
import ProfileLogo from '../../assets/images/profile_logo.jpg'
import Zigzag from '../../assets/images/zigzag.png'
import ZigzagIcon from '../../assets/images/zigzag_icon.png'
import Work from '../../assets/images/work.png'
import EventPro from '../../assets/images/Capture3.PNG'
import Thajobz from '../../assets/images/Capture12.PNG'
import Onqoba from '../../assets/images/Capture17.PNG'
import PosDashboard from '../../assets/images/Captureb.PNG'
import MenuContactless from '../../assets/images/menu2.PNG'
import htmlIcon from '../../assets/images/HTML5_logo_and_wordmark.svg.png'

import cssIcon from '../../assets/images/download.png'
import jqueryIcon from '../../assets/images/jquery-badge.png'
import javaScriptIcon from '../../assets/images/free-javascript-2038874-1720087.webp'
import typeScriptIcon from '../../assets/images/download (1).png'
import tailwindIcon from '../../assets/images/download (2).png'
import bootstrapIcon from '../../assets/images/bootstrap-icon-b-letter-logo_781017-7.avif'
import vueIcon from '../../assets/images/download (4).png'
import reactIcon from '../../assets/images/React-icon.svg.png'
import wordpressIcon from '../../assets/images/download (3).png'
import kajabiIcon from '../../assets/images/5e267002496ea060c914a34b_facebook_share.png'
import djangoIcon from '../../assets/images/django-logo-4C5ECF7036-seeklogo.com.png'
import grpcIcon from '../../assets/images/grpc-icon-color.png'
import figmaIcon from '../../assets/images/1667px-Figma-logo.svg.png'
import Delicious from '../../assets/images/p9.PNG'

import Stack from '@mui/material/Stack';
import CircleIcon from '../../assets/images/circle.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css'
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const LandingPage = ({mailto, label}) => {

    const pages = [
        {
            title: "Contact",
            id: "service_"
        }, 
        {
            title: "Works",
            id: "work_"
        }, 
        {
            title: "Skill",
            id: "skill_"
        }
    ]
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const goToAnchor = (ele) => {
        console.log(ele)
        const work = document.getElementById(`${ele.id}`)
        work.scrollIntoView({ behavior: "smooth" });
    }
    const goToMail = () => {
        
    }
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
                                    <MenuItem key={page.title}
                                    className='menu-list'
                                    >
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}  
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="text"
                        sx={{ my: 2, color: 'black', display: 'block',
                        fontFamily: 'Shalimar, cursive', fontSize: 48, fontWeight: 400 }}>
                        Misgana
                        </Typography>
                        {pages.map((page) => (
                        <Button
                            key={page.title}
                            sx={{ my: 2, ml: 10, color: 'black', display: 'block',
                                fontFamily: 'Shalimar, cursive', fontWeight: 400 }}
                                onClick={(e) => {
                                    goToAnchor(page)
                                }}>
                            {page.title}
                        </Button>
                        ))}
                        <Button variant="text">
                            <Link
                                className='email'
                                to='#'
                                onClick={(e) => {
                                    window.location.href = 'mailto:misganayoseph@gmail.com';
                                    e.preventDefault();
                                }}>
                                <Typography variant="h6"
                                    textAlign="center"
                                    sx={{ my: 2, ml: 25, color: 'black', display: 'block',
                                    fontFamily: 'Shalimar, cursive', fontWeight: 400 }}>
                                    misganayoseph@gmail.com
                                </Typography>
                            </Link>                      
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
                                    what do I help
                                </Typography>
                                <Typography variant="h6" color="initial" sx={{fontFamily: "Belleza", fontSize: 20, color: '#134776', textAlign: 'center', marginTop: 5}}>
                                    i am a software engineer with more than four years of experience. recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
                                </Typography>
                            </Box>
                </Box>
            </Box>
            <Box id="skill_" sx={{textAlign: 'center'}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 80, color: '#134776', textAlign: 'center', marginTop: 5}}
                >What I can do</Typography>
                <Typography variant="h5" color="initial" sx={{fontFamily: "Belleza", textAlign: 'center', marginTop: 5}}>
                    Below is just a high-level list of the languages / frameworks that I'm familiar with.
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '2rem 15rem'}}>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                        <img  src={cssIcon}  />
                        {/* <Typography className='tech__stack-text'>CSS</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                        <img  src={javaScriptIcon} />   
                        {/* <Typography className='tech__stack-text'>JavaScript</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img  src={typeScriptIcon} />
                    {/* <Typography className='tech__stack-text'>TypeScript</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={vueIcon}  />
                    {/* <Typography className='tech__stack-text'>Vue Js</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={reactIcon} />
                    {/* <Typography className='tech__stack-text'>React Js</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={wordpressIcon} />
                    {/* <Typography className='tech__stack-text'>WordPress</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={bootstrapIcon} />
                    {/* <Typography className='tech__stack-text'>Bootstrap</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img width={104} src={tailwindIcon} />
                    {/* <Typography className='tech__stack-text'>TailwindCss</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={djangoIcon} />
                    {/* <Typography className='tech__stack-text'>Django</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 3rem', margin: '.5rem .5rem'}}>
                    <img src={jqueryIcon} />
                    {/* <Typography className='tech__stack-text'>Jquery</Typography> */}
                    </Grid>
                    {/* <ul>
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
                        <li>Figma</li>
                    </ul> */}
                </Box>
            </Box>
            <Box id="work_" className="work" sx={{backgroundColor: "#F8F7F1"}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 80, color: '#134776', textAlign: 'center', marginTop: 5}}
                >Work and Experiences </Typography>
                <Box sx={{marginTop: 5}}>
                    <Carousel showArrows="true">
                        <div>
                            <img src={EventPro}/>
                        </div>
                        <div>
                            <img src={Thajobz} />
                        </div>
                        {/* <div>
                            <img src={Onqoba} />
                        </div> */}
                        {/* <div>
                            <img src={PosDashboard} />
                        </div> */}
                        <div>
                            <img src={MenuContactless} />
                        </div>
                        <div>
                            <img src={Delicious} />
                        </div>
                    </Carousel>
                </Box>
            </Box>
            <Box id="service_" className="footer">
                <Box className="social-link">
                    <a href="https://github.com/misgana96" target='_blank' style={{
                        textDecoration: 'none'
                    }}>
                        <GitHubIcon sx={{fontSize: 80}} />
                    </a>
                    <a href="https://www.linkedin.com/in/misgana-yoseph-36b42315b/" target='_blank' style={{
                        textDecoration: 'none'
                    }}>
                        <LinkedInIcon sx={{fontSize: 80}} />
                    </a>
                </Box>
                {/* <small className='copyright'>copyright @2023</small> */}
            </Box>
        </Box>
    )
}   

export default LandingPage