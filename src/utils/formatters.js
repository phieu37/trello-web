// Viết hoa chữ cái đầu tiên của chuỗi

export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

// video 37.2: hàm generatePlaceholderCard: Cách xử lý bug logic thư viện Dnd-kit khi Column là rỗng:
// Phía FE sẽ tự tạo ra 1 card đặc biệt: Placeholder Card, ko liên quan tới BE
// Card đặc biệt này sẽ được ẩn ở giao diện UI người dùng
// Cấu trúc Id của card này Unique rất đơn giản, ko cần pải làm random phức tạp:
// "columnId-placeholder-card" (mỗi column chỉ có tối đa 1 Placeholder Card)
// Quan trọng khi tạo: phải đầy đủ: (_id, boardId, columnId, FE_PlaceholderCard)
export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}
