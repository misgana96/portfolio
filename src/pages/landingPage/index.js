import React, {useState} from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
// import HtmlIcon from '@mui/icons-material/Html';
// import CssIcon from '@mui/icons-material/Css';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Paper, Toolbar } from '@mui/material';
import ProfileLogo from '../../assets/images/profile_logo.jpg'
import Zigzag from '../../assets/images/zigzag.png'
import ZigzagIcon from '../../assets/images/zigzag_icon.png'
import MenuContactlessIcon from '../../assets/images/menucontactless.png'
import Greyfriars from '../../assets/images/grefres.png'
import MyAccentWay from '../../assets/images/myaccent.webp'
import Movie4All from '../../assets/images/movie4all.PNG'

import cssIcon from '../../assets/images/download.png'
import jqueryIcon from '../../assets/images/jquery-badge.png'
import javaScriptIcon from '../../assets/images/free-javascript-2038874-1720087.webp'
import typeScriptIcon from '../../assets/images/download (1).png'
import tailwindIcon from '../../assets/images/download (2).png'
import bootstrapIcon from '../../assets/images/bootstrap-icon-b-letter-logo_781017-7.avif'
import vueIcon from '../../assets/images/download (4).png'
import reactIcon from '../../assets/images/React-icon.svg.png'
import wordpressIcon from '../../assets/images/download (3).png'
import djangoIcon from '../../assets/images/django-logo-4C5ECF7036-seeklogo.com.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import CircleIcon from '../../assets/images/circle.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './styles.css'
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import app from '../../firebase'

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
    const recentWorks = [
        {
            url: "https://greyfriars.wpenginepowered.com/",
            image: Greyfriars,
            color: "#ECF4F4"
        },
        {
            url: "https://myaccentway.com/",
            image: MyAccentWay,
            color: "linear-gradient(260.97deg, #227DB6 3.87%, #855791 45.01%, #EA2063 85.65%);"
        },
        {
            url: "https://admin-dev-menu-contactless.onqoba.com/login",
            image: MenuContactlessIcon,
            color: "#e9ad9d"
        },
        {
            url: "https://movie4all-6vfhgjjh2-misgnas-projects.vercel.app/",
            image: Movie4All,
            color: "#000"
        }
    ]
    // const [anchorElNav, setAnchorElNav] = useState(null);
    // const [anchorElUser, setAnchorElUser] = useState(null);

    const [isHovering, setIsHovering] = useState(false)

    const [snacker, setSnacker] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center'
    })

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const {open, vertical, horizontal} = snacker;

    const handleClick = (newState) => {
        setSnacker({ ...newState, open: true});
      };
    
      const handleClose = () => {
        setSnacker({ ...snacker, open: false });
        setSuccess('')
        setError('')
      };

    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const {name, email, message} = state

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('Please provide value in each input field')
            handleClick({ vertical: 'top', horizontal: 'center'})
        } else {
            app.child("portfolio").push(state);
            setState({
                name: "",
                email: "",
                message: ""
            });
            setSuccess('Form Submitted Successfully')
            handleClick({ vertical: 'top', horizontal: 'center'})
        }
    }
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
      };
    
    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }
    const goToAnchor = (ele) => {
        console.log(ele)
        const work = document.getElementById(`${ele.id}`)
        work.scrollIntoView({ behavior: "smooth" });
    }

    const goToProjectSite = (val) => {
        window.open(val, "_blank")
    }
    return (
        <Box className="container-content">
            <AppBar position="fixed" sx={{backgroundColor: "#F8F7F1"}}
            elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{justifyContent: 'space-around'}}>
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-around'}}>
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
                        </Box> */}
                        <Box sx={{display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-around', width: '85%'}}>
                            <Typography variant="text"
                            sx={{ my: 2, color: 'black', display: 'block',
                            fontFamily: 'Shalimar, cursive', fontSize: 48, fontWeight: 400 }}>
                            Misgana
                            </Typography>
                        {pages.map((page) => (
                        <Box
                            key={page.title}
                            sx={{ my: 2, ml: 10, color: 'black', display: 'block',
                                fontFamily: 'Shalimar, cursive', fontWeight: 400 }}
                                onClick={(e) => {
                                    goToAnchor(page)
                                }}>
                            {page.title}
                        </Box>
                        ))}
                        <Box sx={{
                            marginLeft: '25px'
                        }}>
                            <Link
                                sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4}}
                                className='email'
                                to='#'
                                onClick={(e) => {
                                    window.location.href = 'mailto:misganayoseph@gmail.com';
                                    e.preventDefault();
                                }}>
                                <EmailRoundedIcon sx={{ml: 2}}/>
                                <Typography variant="h6"
                                    textAlign="center"
                                    sx={{ color: 'black', display: 'block',
                                    fontFamily: 'Shalimar, cursive', fontWeight: 400 }}>
                                    misganayoseph@gmail.com
                                </Typography>
                            </Link>                      
                        </Box>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{marginTop: 20, mx: 10, display: 'flex', maxWidth: 'xl', marginLeft: 'auto', marginRight: 'auto', width: 1100}}>
                <Avatar src={ProfileLogo} sx={{width: 164, height: 194}} />
                <Typography variant="h5" sx={{fontFamily: "Belleza, cursive", fontSize: 64, fontWeight: 400, ml: 5, mt: 2}} >
                    Hi There <br/>
                    I’m Misgana
                </Typography>
            </Box>
            <Box sx={{display: 'flex', maxWidth: 'xl', marginLeft: 'auto', marginRight: 'auto'}}>
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
                            <img className='circle-icon' src={CircleIcon}  alt='icon'/>
                            <img className='zigzag-icon' src={ZigzagIcon} alt='icon'/>
                        </Stack>

                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}} width={600}>
                    <Box>
                        <img className='zigzag' src={Zigzag} alt='icon'/>
                    </Box>
                    <Box width={488} className="what-help">
                                <Typography variant="h3" color="initial" sx={{fontFamily: "Belleza", fontSize: 42, textAlign: 'center', color: '#134776'}}>
                                    what do I help
                                </Typography>
                                <Typography variant="h6" color="initial" sx={{fontFamily: "Belleza", fontSize: 20, textAlign: 'center', marginTop: 5}}>
                                    i am a software engineer with more than four years of experience. recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
                                </Typography>
                            </Box>
                </Box>
            </Box>
            <Box id="skill_" sx={{textAlign: 'center'}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 42, color: '#134776', textAlign: 'center', marginTop: 5}}
                >What I can do</Typography>
                <Typography variant="h5" color="initial" sx={{fontFamily: "Belleza", textAlign: 'center', marginTop: 5}}>
                    Below is just a high-level list of the languages / frameworks that I'm familiar with.
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '2rem 15rem'}}>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                        <img  src={cssIcon}  alt='img'/>
                        {/* <Typography className='tech__stack-text'>CSS</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                        <img  src={javaScriptIcon} alt='img' />   
                        {/* <Typography className='tech__stack-text'>JavaScript</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img  src={typeScriptIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>TypeScript</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={vueIcon}  alt='img' />
                    {/* <Typography className='tech__stack-text'>Vue Js</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={reactIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>React Js</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={wordpressIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>WordPress</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={bootstrapIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>Bootstrap</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img width={104} src={tailwindIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>TailwindCss</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 1.5rem', margin: '.5rem .5rem'}}>
                    <img src={djangoIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>Django</Typography> */}
                    </Grid>
                    <Grid component={Paper} width={150} height={150} elevation={3} borderRadius={'20px'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 3rem', margin: '.5rem .5rem'}}>
                    <img src={jqueryIcon} alt='img' />
                    {/* <Typography className='tech__stack-text'>Jquery</Typography> */}
                    </Grid>
                </Box>
            </Box>
            <Box id="work_" className="work" sx={{backgroundColor: "#F8F7F1"}}>
                <Typography variant="h1" color="initial"
                sx={{fontFamily: "Belleza", fontSize: 42, color: '#134776', textAlign: 'center', marginTop: 5}}
                >My Recent Works</Typography>
                <Box sx={{my: 10, px: 2, display: 'flex', flexWrap: 'wrap', flexDirection: 'row', gap: 5, justifyContent: 'center'}}>
                    {
                        recentWorks.map((work) => (
                            <Paper className='previous__task' elevation={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${work.color}`, width: '380px', height: '260px', borderRadius: '15px'}}>
                                    <figure>
                                        <img src={work.image} alt="Trulli" width={200}/>,
                                        <figcaption
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}>
                                            {isHovering && (
                                                <Button 
                                                variant="contained"
                                                onClick={(() => {
                                                    goToProjectSite(work.url)
                                                })} endIcon={<ArrowForwardIcon/>}>
                                                    Visti Website
                                                </Button>
                                            )}
                                            {!isHovering && (
                                                <Button 
                                                variant="outlined"
                                                onClick={(() => {
                                                    goToProjectSite(work.url)
                                                })} endIcon={<ArrowForwardIcon/>}>
                                                    Visti Website
                                                </Button>
                                            )}
                                        </figcaption>
                                    </figure>
                            </Paper>
                        ))
                    }
                </Box>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, cols: 12 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    py: 5
                  }}
                noValidate
                autoComplete='off'>
                <Typography variant="h6" color="initial"
                    sx={{fontFamily: "Belleza", fontSize: 32, color: '#134776', textAlign: 'center', marginTop: 5}}
                    >Thanks for taking the time to reach out. How can I help you today?
                </Typography>
                <Box sx={{display: 'flex', py: 5, '& .MuiTextField-root': { m: 1, cols: 12 },}}>
                    <TextField
                        fullWidth 
                        id='name'
                        label="Name"
                        type="name"
                        name='name'
                        autoComplete='current-name'
                        onChange={handleInputChange}
                        value={name}
                        size='large'/>
                    <TextField
                        fullWidth 
                        id='email'
                        label="email"
                        type="email"
                        name='email'
                        autoComplete='current-email'
                        onChange={handleInputChange}
                        value={email}/>
                </Box>
                <TextField
                    id='message'
                    label="Message"
                    type="message"
                    name='message'
                    multiline
                    rows={12}
                    cols={12}
                    autoComplete='current-message'
                    onChange={handleInputChange}
                    value={message}/>
                <Box 
                    variant='outlined' 
                    size='large' 
                    sx={{my: 10, marginLeft: 'auto', marginRight: 'auto'}}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    {isHovering && (
                        <Button 
                            variant='contained' 
                            size='large' 
                            sx={{width: '200px', my: 3, py: 2, marginLeft: 'auto', marginRight: 'auto', borderRadius: '999px'}}
                            onClick={handleSubmit}>
                                Submit
                        </Button>
                    )}
                    {!isHovering && (
                        <Button 
                            variant='outlined' 
                            size='large' 
                            sx={{width: '200px', my: 3, py: 2, marginLeft: 'auto', marginRight: 'auto', borderRadius: '999px'}}>
                                Submit
                        </Button>
                    )}
                </Box>
            </Box>
            <Box id="service_" className="footer">
                <Box className="social-link">
                    <a href="https://github.com/misgana96" target='_blank' rel="noreferrer" style={{
                        textDecoration: 'none'
                    }}>
                        <GitHubIcon sx={{fontSize: 80}} />
                    </a>
                    <a href="https://www.linkedin.com/in/misgana-yoseph-36b42315b/" target='_blank' rel="noreferrer" style={{
                        textDecoration: 'none'
                    }}>
                        <LinkedInIcon sx={{fontSize: 80}} />
                    </a>
                </Box>
                {/* <small className='copyright'>copyright @2023</small> */}
            </Box>

            <Box sx={{width: 500}}>
                    <Snackbar
                        anchorOrigin={{vertical, horizontal}}
                        open={open}
                        onClose={handleClose}
                        message={success ? success : error}
                        key={vertical + horizontal}>

                    </Snackbar>
            </Box>
        </Box>
    )
}   

export default LandingPage