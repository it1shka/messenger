import styled from 'styled-components'
import DialogBar from './DialogBar'

const DialogView = () => {
  return (
    <DialogContainer>
      
    </DialogContainer>
  )
}

const DialogContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;

  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
`

export default DialogView