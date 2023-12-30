import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }

  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/278843845_675008220237880_2416070965322017240_n.jpg?stp=c58.0.160.160a_dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=4da83f&_nc_ohc=xzPI2Dt6MLoAX9NLKok&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDoyjubxvn7Hof7GQZGXIge8jFqSO86FkLBYzEwaBdwMg&oe=65938B30"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>PhieuDev MERN Stack</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>10</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>15</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card