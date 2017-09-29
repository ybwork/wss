<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>

<script type="text/javascript">
	var socket = io(':3001', {query: "connect=" + 1, secure: true, rejectUnauthorized : false});

	// socket.on('chat:online', function (data) {
	// 	console.log(data);
	// });

	// socket.emit('chat:test', 'fuck');

	// socket.on('chat:disconnect', function (data) {

	// });

	// socket.on('chat:message', function (data) {
	// 	getChatMessage(data.data.message.content, data.data.message.user_id);
	// });
</script>