    
	//删除全部子节点
	function deleteChildrenNode() {
	    var nodeData = $tree.treeview('getSelected')[0];
	    $tree.treeview("deleteChildrenNode", nodeData.nodeId);
	}
	//删除选中节点
	function delNode(){
		
		$("#tree").treeview("deleteNode", [getSelected(), { silent: true } ]); 
	}
	//返回被选择节点
	function getSelected(){
		var node = $('#tree').treeview('getSelected');
		if (node.length == 0) {
			$.showMsgText('请选择需要操作的节点');
			return;
		}else{
			return node[0].nodeId
		}	
	}
	//展开所有节点
	function expandAll(){
		$('#tree').treeview('expandAll', { levels: 2, silent: true });
	}
	//折叠所有节点
	function collapseAll(){
		$('#tree').treeview('collapseAll', { silent: true });
	}
	//选择所有的节点
	function selectAllNodes(){
		alert("选择所有节点复选框才好用！！")
		$('#tree').treeview('checkAll', { silent: true });
	}
	//递归获取所有的结点id
	function getNodeIdArr( node ){
	        var ts = [];
	        if(node.nodes){
	            for(x in node.nodes){
	                ts.push(node.nodes[x].nodeId)
	                if(node.nodes[x].nodes){
	                var getNodeDieDai = getNodeIdArr(node.nodes[x]);
	                    for(j in getNodeDieDai){
	                        ts.push(getNodeDieDai[j]);
	                    }
	                }
	            }
	        }else{
	            ts.push(node.nodeId);
	       }
	   return ts;
	}

	//添加根节点
	function addRootNode(){
		$('#parentIdForRootNode').val(0);
		$('#addOperation-dialog').modal('show');
	}
	
	//向选中的节点下添加节点
	function addNode(){
		var node = $('#tree').treeview('getSelected');
		if (node.length == 0) {
			$.showMsgText('请选择节点');
			return;
		}
		//添加节点的父节点ID
		$('#parentId').val($("#orgId").val());
		//显示模态窗口
		$('#addSubOperation-dialog').modal('show');
    }
    //编辑组织机构信息
    function orgEdit(){
    	alert("正在去往后端更新");
    }
    //重置组织机构信息
    function reset(){
    	$("#orgName").val('');
    	$("#orgLeader").val('');
    	$("#remark").val('');
    }