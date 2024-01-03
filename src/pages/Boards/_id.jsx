// Board Detail
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mapOrder } from '~/utils/sorts'

// import { mockData } from '~/apis/mock-data'
import {
  fetchBoardDetailsAPI,
  createNewColumnAPI,
  createNewCardAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI
} from '~/apis'
import { generatePlaceholderCard } from '~/utils/formatters'
import { isEmpty } from 'lodash'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    // Tạm thời fix cứng boardId, flow chuẩn chỉnh về sau khi học nâng cao trực tếp
    // sẽ sử dụng react-router-dom để lấy chuẩn boardId từ URL về
    const boardId = '65938e5731638f33fb8ce573'
    // Call API
    fetchBoardDetailsAPI(boardId).then(board => {

      // Sắp xếp thứ tự các column luôn ở đây trước khi đưa dữ liệu xuống bên dưới các component con(video71)
      board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')

      board.columns.forEach(column => {
        // Khi f5 trang web thì cần xử lý v/đề kéo thả vào 1 column rỗng(nhớ lại video 37.2, code hiện tại là video 69)
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        } else {
          // Sắp xếp thứ tự các cards luôn ở đây trước khi đưa dữ liệu xuống bên dưới các component con(video 71)
          column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
        }
      })
      console.log('full board: ', board)
      setBoard(board)
    })
  }, [])

  // Gọi API tạo mới Column và làm lại dữ liệu State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    // Khi tạo column mới thì nó sẽ chưa có card, cần xử lý v/đề kéo thả vào 1 column rỗng(nhớ lại video 37.2, code hiện tại là video 69)
    createNewColumn.cards = [generatePlaceholderCard(createNewColumn)]
    createNewColumn.cardOrderIds = [generatePlaceholderCard(createNewColumn)._id]

    // console.log('createdColumn: ', createdColumn)

    // Cập nhật state board
    // Phía FE phải tự làm lại state data board(thay vì gọi lại api fetchBoardDetailsAPI)
    // Lưu ý: cách làm này phụ thuộc vào lựa chọn đặc thù dự án, có nơi BE sẽ hỗ trợ trả về
    // luôn toàn bộ Board dù đây có là api tạo Column hay Card => FE nhàn hơn
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  // Gọi API tạo mới Card và làm lại dữ liệu State Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })
    // console.log('createdCard: ', createdCard)

    // Cập nhật state board
    // Phía FE phải tự làm lại state data board(thay vì gọi lại api fetchBoardDetailsAPI)
    // Lưu ý: cách làm này phụ thuộc vào lựa chọn đặc thù dự án, có nơi BE sẽ hỗ trợ trả về
    // luôn toàn bộ Board dù đây có là api tạo Column hay Card => FE nhàn hơn
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
  }

  // Gọi API và xử lý khi kéo thả Column xong xuôi
  // Chỉ cần gọi API để cập nhật mảng columnOrderIds của Board chứa nó(thay đổi vị trí trong board)
  const moveColumns = (dndOrderedColumns) => {
    // Update cho chuẩn dữ liệu state Board
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    // Gọi API update Board
    updateBoardDetailsAPI(newBoard._id, { columnOrderIds: dndOrderedColumnsIds })
  }

  // Khi di chuyển card trong cùng Column:
  // Chỉ cần gọi API để cập nhật mảng cardOrderIds của Column chứa nó(thay đổi vị trí trong mảng)
  const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    // Update cho chuẩn dữ liệu state Board
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
    }
    setBoard(newBoard)

    // Gọi API update Column
    updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds })
  }

  if (!board) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100vw',
        height: '100vh'
      }}>
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      {/* <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} /> */}
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumns={moveColumns}
        moveCardInTheSameColumn={moveCardInTheSameColumn}
      />
    </Container>
  )
}

export default Board
