import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Icon } from '@mui/material';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import RenderComponents from '../RenderComponent/RenderComponent';
import { COMPONENTS, STATUS } from '../../Utils/Constants';

function DialogComponent({
  open,
  titleType,
  // columnWidth,
  handleClose,
  maxWidth,
  title,
  content,
  titleProps,
  contentProps,
  isCancelButton = true,
  cancelButtonText,
  isProceedButton = true,
  proceedButtonText,
  handleProceed
}) {
  const { SUCCESS, FAILED, WARNING, ERROR } = STATUS;
  const { BUTTON } = COMPONENTS;

  const myCloseModal = (event, reason) => {
    if (reason && reason === 'backdropClick') return;
    handleClose();
  };

  const getIcon = (titleType) => {
    switch (titleType) {
      case SUCCESS:
        return <CheckCircleOutlineIcon />;
      case FAILED:
        return <ErrorOutlineRoundedIcon />;
      case WARNING:
        return <WarningAmberIcon />;
      case ERROR:
        return <CancelOutlinedIcon />;
      default:
        return null;
    }
  };

  return (
    <Dialog fullWidth maxWidth={maxWidth} open={open} onClose={myCloseModal}>
      <IconButton
        sx={{
          position: 'absolute',
          right: 5,
          top: 5
        }}
        onClick={myCloseModal}
      >
        {/* <CloseIcon /> */}
      </IconButton>
      <DialogTitle
        {...titleProps}
        sx={{ pt: '10', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom:'-1rem' }}
      >
        {/* {titleType && <Icon>{getIcon(titleType)}</Icon>} */}
        {title}
      </DialogTitle>
      <DialogContent {...contentProps} sx={{ pb: '0', pl: '2.1rem', wordWrap: 'break-word' }}>
        {content}
      </DialogContent>
      <DialogActions sx={{ pb: '10', pt: '0', marginTop:'1rem'}}>
        {isProceedButton && (
          <RenderComponents
            metaData={{
              control: BUTTON,
              color: 'success',
              size: 'small',
              btnTitle: proceedButtonText || 'Proceed',
              handleClickButton: () => handleProceed(),
              groupStyle: { minWidth: '6rem' }
            }}
          />
        )}
        {isCancelButton && (
          <RenderComponents
            metaData={{
              control: BUTTON,
              color: 'success',
              btnTitle: cancelButtonText || 'Cancel',
              handleClickButton: () => myCloseModal(),
              groupStyle: { minWidth: '7rem' }
            }}
          />
        )}
      </DialogActions>
    </Dialog>
  );
}

DialogComponent.propTypes = {
  open: PropTypes.bool,
  titleType: PropTypes.string,
  handleClose: PropTypes.func,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  titleProps: PropTypes.object,
  contentProps: PropTypes.object,
  isCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  isProceedButton: PropTypes.bool,
  proceedButtonText: PropTypes.string,
  handleProceed: PropTypes.func
};

export default memo(DialogComponent);
