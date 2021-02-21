import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import api from '../../api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers()
    .then((result) => setUsers(result.data))
  }, [])

  return (
    <Box>
      {users.map((user) => <Box key={user.id}>{user.firstName}</Box>)}
    </Box>
  );
}

export default Users;