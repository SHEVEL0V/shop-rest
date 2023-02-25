/** @format */

import React, { useState } from "react";

import {
  Avatar,
  Typography,
  MenuItem,
  Menu,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/auth/slice";

export default function AvatarIcon() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0, marginLeft: 10 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={() => dispatch(setUser({}))}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
