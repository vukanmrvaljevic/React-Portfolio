import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

export default function ResponsiveDialog() {
  let url1 = "https://www.linkedin.com/in/vukan-mrvaljevic/"
  let url2 = "https://github.com/vukanmrvaljevic"
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const styleObj = {
    fontSize: 14,
    borderColor: "white",
    borderWidth: "medium",
    textAlign: "center",
    paddingTop: "20px",
  }

  return (
    <div>
      <Button
        style={styleObj}
        className="contact-button"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Other Forms of Contact
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <a href={url1} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/fluent/96/000000/linkedin.png"
                alt="linked-in"
              />
              <h6 className="linked-in-button">Linked-In</h6>
            </a>
            <a href={url2} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/fluent/96/000000/github.png"
                alt="github"
              />
              <h6 className="github-button">GitHub</h6>
            </a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
