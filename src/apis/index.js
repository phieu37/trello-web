import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

// Lưu ý: Đối với việc sử dụng axios
// Tất cả các funtion bên dưới mình chỉ request và lấy data từ response luôn
// mà ko try catch hay then catch để bắt lỗi. Lý do ở phía FE ko cần thiết làm vậy
// đối với mọi request bởi nó sẽ gây ra việc dư thừa code catch lỗi quá nhiều
// Giải pháp Clean Code gọn gàng là sẽ catch lỗi tập trung tại 1 nơi,
// tận dụng Interceptors trong axios (khóa nâng cao)

// Boards
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  return response.data
}

export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, updateData)
  return response.data
}

export const moveCardToDifferentColumnAPI = async (updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/supports/moving_cards`, updateData)
  return response.data
}

//  Column
export const createNewColumnAPI = async (newColumnData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)
  return response.data
}

// Card
export const createNewCardAPI = async (newCardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}