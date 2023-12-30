import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'


const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="PhieuDev MERN Stack Board"
          // clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          // clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          // clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick={() => { }}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          // clickable
          onClick={() => { }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: 'a4b0be' }
            }
          }}
        >
          <Tooltip title="phieudev">
            <Avatar
              alt="phieudev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/278843845_675008220237880_2416070965322017240_n.jpg?stp=c58.0.160.160a_dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=xzPI2Dt6MLoAX9NLKok&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDoyjubxvn7Hof7GQZGXIge8jFqSO86FkLBYzEwaBdwMg&oe=65938B30"
            />
          </Tooltip>
          <Tooltip title="phieudev">
            <Avatar
              alt="phieudev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/51694290_119005705838137_3971790557667131392_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=TsQW6E3tMe4AX8Y3-P8&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCbOZCY3QOGqIWjPWotgyO21nUbMPdCsGvDOHjGouxtvg&oe=65B60831"
            />
          </Tooltip>
          <Tooltip title="phieudev">
            <Avatar
              alt="phieudev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/217693359_511923123213058_169773612870110223_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=3d9721&_nc_ohc=8vp1Kgu26LkAX8yONM_&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBUrgWZjB9wMte8Ai4TyphuaM-0E6sO-eA7qTmwLHrgdQ&oe=6592D5A8"
            />
          </Tooltip>
          <Tooltip title="phieudev">
            <Avatar
              alt="phieudev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/404688276_1021681572237208_2749756149311663009_n.jpg?stp=c94.0.206.206a_dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=3d9721&_nc_ohc=OvGfTXh66GoAX9PiOC0&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBALLLHPORrchgt5fzTQTEzFtC4wafJUYIf9itbqBugeA&oe=6593AB25"
            />
          </Tooltip>
          <Tooltip title="phieudev">
            <Avatar
              alt="phieudev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/375049069_979891219749577_5617224626510040596_n.jpg?stp=c0.79.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=3d9721&_nc_ohc=fouYAtnEO7YAX-x-uwg&_nc_ht=scontent.fhan17-1.fna&oh=00_AfA0rNZtymebrtG9i19oF9IQCh_jIXqEv3Sjnp4Zmdic3Q&oe=65932B70"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box >
  )
}

export default BoardBar
