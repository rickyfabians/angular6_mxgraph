import { Component, OnInit,AfterViewInit, ElementRef, ViewChild,ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'rickyganteng',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './rickyganteng.component.html',
  styleUrls: ['./rickyganteng.component.scss']
})
export class RickygantengComponent implements OnInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  graph:any;
  editor:any;
  utils:any;
  mxConnectionConstraint:any;
  mxPolyline:any
  mxShape:any;
  mxEvent:any;
  mxPoint:any;
  mxRubberband:any;
  mxCellState:any;
  parent:any;
  value:any;
  lovOfdiagram:any=[];
  Constans:any;
  constructor() { }

  ngOnInit() {
    let body = document.getElementsByClassName('makan');
    console.log(body.item)
    console.log(body)
    console.log(body[0].innerHTML)
    body[0].innerHTML = "aku ingin makan"
    this.lovOfdiagram = [
      { color : 'blue',type : 'shape', label : "Send to \n Fulfillment",icon : '../assets/images2/icon/like.png'},
      { color : 'blue',type : 'shape', label : 'Send to \n SMS',icon : '../assets/images2/icon/like.png'},
      { color : 'blue',type : 'shape', label : 'Send to \n FB',icon : '../assets/images2/icon/like.png'},
      { color : 'grey',type : 'rhombus', label : 'Dec',icon : ''},
      { color : 'red',type : 'rounded', label : 'St', icon : ''},
      { color : 'none',type : 'label', label : 'text', icon : ''}
    
    ]
    var event:any = mxEvent;
    event.disableContextMenu(this.graphContainer.nativeElement);
    this.graph = new mxGraph(this.graphContainer.nativeElement);
    this.graph.setConnectable(true);
    this.editor = new mxEditor(this.graph);
    this.utils = mxUtils;
    // this.extendCanvas(this.graph);
    console.log(this.editor)
    this.graph.view.scale = 1;
		this.graph.setPanning(true);
		this.graph.setConnectableEdges(true);
    this.graph.setDisconnectOnMove(false);
			
			//Maximum size
    this.graph.maximumGraphBounds = new mxRectangle(0, 0, 800, 600)
		this.graph.border = 50;

			// Panning handler consumed right click so this must be
			// disabled if right click should stop connection handler.
    this.graph.panningHandler.isPopupTrigger = function() { return false; };
			
			// Enables return key to stop editing (use shift-enter for newlines)
    this.graph.setEnterStopsCellEditing(true);

			// Adds rubberband selection
			new mxRubberband(this.graph);

    
    console.log(this.graph.popupMenuHandler)

    //EdgeStyle
    var Edgestyle = this.graph.getStylesheet().getDefaultEdgeStyle();
    var EdgeConstants:any = mxConstants;
    Edgestyle[EdgeConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
    Edgestyle[EdgeConstants.STYLE_ROUNDED] = true;
    delete Edgestyle['endArrow'];
    console.log(Edgestyle)
    //End EdgeStyle

    this.graph.popupMenuHandler.autoExpand = true;
    this.graph.popupMenuHandler.factoryMethod = function(menu, cell, evt)
    {
        var utils:any = mxUtils;
        if (cell != null)
        {
          menu.addItem('Properties', '../assets/icons/properties.png', function(evt)
          {
            utils.alert('Tolol lu');
            console.log(evt);
          });
          menu.addSeparator();
          menu.addItem('Cut', '../assets/icons/cut.png', function(evt)
          {
            utils.alert('Cut: '+cell.getSelectionCount()+' selected');
          });
          menu.addItem('Copy', '../assets/icons/copy.png', function(evt)
          {
            utils.alert('Copy: '+cell.getSelectionCount()+' selected');
          });
          menu.addItem('Delete', '../assets/icons/delete.png', function(evt)
          {
            this.editor.execute("delete",cell,evt)
            console.log(evt)
            console.log(cell)
          });
        }
        else
        {
          menu.addItem('No-Cell', 'editors/images/image.gif', function()
          {
            utils.alert('ouch');
          });
        }
        
        return;
    };
    
		// var graph = editor.graph;
		// var model = graph.getModel();
    console.log(mxUtils)
		var parent = this.graph.getDefaultParent();
		this.graph.getModel().beginUpdate();

    try {

    } finally {
      this.graph.getModel().endUpdate();
      new mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
      }
    }
  
  break(knownPassword){
    var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  
          var start = (new Date()).getTime(),
              guess = '',
              c;

          while(guess !== knownPassword) {
              for(var i = 0; i < charset.length; i++) {
                  c = charset.charAt(i);
                  console.log("break ",knownPassword.charAt(guess.length))
                  if (c === knownPassword.charAt(guess.length)) {
                      guess += c;
                      console.log(guess);
                      break;
                  }
              }

          }
          console.log(start)
          console.log('mycrack',  (Number(new Date()) * 1) - start, 'ms');
  }
  // }

  saveAsXml(){
    console.log(this.graph)
    // console.log(this.editor)
    // var textarea = document.createElement('textarea');
		// textarea.style.width = '400px';
    // textarea.style.height = '400px';
		// var enc = new mxCodec(this.utils.createXmlDocument());
		// var node = enc.encode(this.editor.graph.getModel());
    // textarea.value = this.utils.getPrettyXml(node);
    // this.showModalWindow(this.graph, 'XML', textarea, 410, 440);
    var encoder = new mxCodec();
    var node = encoder.encode(this.graph.getModel());
    console.log('xml',node)
    console.log('bang',this.utils.getPrettyXml(node))
		this.utils.popup(this.utils.getPrettyXml(node), true);
  }

  showModalWindow(graph, title, content, width, height)
		{
			var background = document.createElement('div');
			background.style.position = 'absolute';
			background.style.left = '0px';
			background.style.top = '0px';
			background.style.right = '0px';
			background.style.bottom = '0px';
			background.style.background = 'black';
			this.utils.setOpacity(background, 50);
			document.body.appendChild(background);
			
			var x = Math.max(0, document.body.scrollWidth/2-width/2);
			var y = Math.max(10, (document.body.scrollHeight ||
						document.documentElement.scrollHeight)/2-height*2/3);
			var wnd = new mxWindow(title, content, x, y, width, height, false, true);
			wnd.setClosable(true);

			graph.tooltipHandler.hide();
			wnd.setVisible(true);
		};

  onKeyup(event){
    console.log(event)
    var key = event.key ? event.key : event;
    if(key == "Delete"){
      if (this.graph.isEnabled())
					{
						this.graph.removeCells();
					}
    }else if(key == "+"){
        console.log(this.graph);
        console.log(this.graph.pageScale)
			  this.graph.zoomIn();
    }else if(key == "-"){
      console.log(this.graph);
      this.graph.zoomOut();
    }else if(key == "x"){
      this.graph.panningHandler.useLeftButtonForPanning = true;
			this.graph.panningHandler.ignoreCell = true;
			this.graph.container.style.cursor = 'grab';
			this.graph.setPanning(true);
    }else if(key == "z"){
      this.graph.panningHandler.useLeftButtonForPanning = false;
			this.graph.panningHandler.ignoreCell = false;
			this.graph.container.style.cursor = 'default';
			this.graph.setPanning(false);
    }
  }

  createPopupMenu(graph, menu, cell, evt)
  {
    console.log(graph, menu, cell, evt)
    var utils:any = mxUtils;
    if (cell != null)
    {
      menu.addItem('Cell Item', 'editors/images/image.gif', function()
      {
        utils.alert('MenuItem1');
      });
    }
    else
    {
      menu.addItem('No-Cell Item', 'editors/images/image.gif', function()
      {
        utils.alert('MenuItem2');
      });
    }
    menu.addSeparator();
    menu.addItem('MenuItem3', '../src/images/warning.gif', function()
    {
      utils.alert('MenuItem3: '+graph.getSelectionCount()+' selected');
    });
  };

  EditorDiagram(event?){
    if(event){
      if(event.dragData.type == "actor"){
          this.actor(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }else if(event.dragData.type == "ellipse"){
          this.ellipse(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }else if(event.dragData.type == "shape"){
        this.shape(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }else if(event.dragData.type == "rhombus"){
          this.rhombus(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }else if(event.dragData.type == "rounded"){
        this.rounded(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }else if(event.dragData.type == "label"){
        this.label(event.dragData,event.mouseEvent.clientX,event.mouseEvent.clientY)
      }
    }
  }

  actor(data,x,y){
    this.graph.insertVertex(this.parent, null, "actor", x, y-100,80, 100,"shape=actor");
  }
  ellipse(data,x,y){
    this.graph.insertVertex(this.parent, null, 'Hello,', 20, 20, 80, 30, "shape=image;image=https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350;");
    this.graph.insertVertex(this.parent, null, 'rect,', 220, 220, 80, 20,"shape=hexagon");
    this.graph.insertVertex(this.parent, null, 'Hellso', 400, 20, 80, 30, "strokeColor=red;fillColor=green","3");
    this.graph.insertVertex(this.parent, null, 'cloud,', 220, 220, 80, 20,"shape=cloud");
    this.graph.insertVertex(this.parent, null, 'Text', 220, 220, 80, 20,"shape=rectangle;perimeter=rectanglePerimeter;fontSize=12;align=left;verticalAlign=top;shadow=0;strokeColor=none;fillColor=none;gradientColor=none");
    // this.graph.createVertexTemplateEntry('text;html=1;strokeColor=none;fillColor=none;spacing=5;spacingTop=-20;whiteSpace=wrap;overflow=hidden;rounded=0;', 190, 120,
		// 	'<h1>Heading</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
		// 	'Textbox', null, null, 'text textbox textarea')
    this.graph.insertVertex(this.parent, null, "ellipse", x, y-100,100, 40,"shape=ellipse");
  }
  shape(data,x,y){
    this.configureCellStylesheet(this.graph,data)
    this.graph.insertVertex(this.parent, null, data.label, x, y-100, 130, 50, 'shape=shape;right;fontSize=13;whiteSpace=wrap;strokeColor='+data.color+';fillColor=none;fontColor='+data.color);
    // let q = this.graph.insertVertex(this.parent, null,' | '+ data.label, x, y-100, 100, 50, 'shape=label;strokeColor='+data.color+';fillColor=none;strokeWidth=2;textAlign=left;fontSize=12;fontColor='+data.color+';image=../assets/images2/icon/like.png;spacingBottom=10;imageHight=12;imageWidth=18;');
  }
  rhombus(data,x,y){
    this.graph.insertVertex(this.parent, null, data.label, x, y-100, 100, 100, 'shape=rhombus;fontSize=14;whiteSpace=wrap;strokeColor='+data.color+';fillColor='+data.color+';fontColor=white');
  }

  rounded(data,x,y){
    this.graph.insertVertex(this.parent, null, data.label, x, y-100, 40, 40, 'shape=ellipse;fontSize=14;whiteSpace=wrap;strokeColor='+data.color+';fillColor='+data.color+';fontColor=white');
  }

  label(data,x,y){
    this.graph.insertVertex(this.parent, null, data.label, x, y-100, 80, 30, 'shape=label;fontSize=14;align=left;verticalAlign=top;shadow=0;strokeColor=none;fillColor=none;gradientColor=none');
  }

  configureCellStylesheet(graph,data)
		{
      
      graph.getModel().beginUpdate();

      //cellStyle
      var style = new Object();
      var Constants:any = mxConstants;
      
      
      style[Constants.STYLE_SHAPE] = Constants.SHAPE_IMAGE;
			// style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
			style[Constants.STYLE_FONTCOLOR] = '#FFFFFF';
			style[Constants.STYLE_SHAPE] = Constants.SHAPE_LABEL;
			style[Constants.STYLE_STROKECOLOR] = '#000000';
			style[Constants.STYLE_ALIGN] = Constants.ALIGN_CENTER;
			style[Constants.STYLE_IMAGE_WIDTH] = '18';
			style[Constants.STYLE_IMAGE_HEIGHT] = '18';
			// style[Constants.STYLE_SPACING_TOP] = '56';
			// delete style[Constants.STYLE_SPACING_TOP];
			style[Constants.STYLE_ALIGN] = Constants.ALIGN_LEFT;
			style[Constants.STYLE_IMAGE_ALIGN] = Constants.ALIGN_LEFT;
			style[Constants.STYLE_VERTICAL_ALIGN] = Constants.ALIGN_MIDDLE;
			style[Constants.STYLE_IMAGE_VERTICAL_ALIGN] = Constants.ALIGN_MIDDLE;
			style[Constants.STYLE_IMAGE] = data.icon;
			style[Constants.STYLE_SPACING_LEFT] = '42';
      style[Constants.STYLE_SPACING] = '10';
      
      graph.getStylesheet().putCellStyle('right', style);

      //endCellStyle
      
      graph.getModel().endUpdate();
  }

  exportFile(format)
				{
					var xmlDoc = this.utils.createXmlDocument();
          var root = xmlDoc.createElement('output');
          xmlDoc.appendChild(root);

          var xmlCanvas = new mxXmlCanvas2D(root);
          var imgExport = new mxImageExport();
          imgExport.drawState(this.graph.getView().getState(this.graph.model.root), xmlCanvas);
          var bounds = this.graph.getGraphBounds();
          var w = Math.ceil(bounds.x + bounds.width);
          var h = Math.ceil(bounds.y + bounds.height);
          var xml = this.utils.getXml(root);
          new mxXmlRequest('export', 'format=png&w=' + w +
              '&h=' + h + '&bg=#F9F7ED&xml=' + encodeURIComponent(xml))
              .simulate(document, '_blank');
				}
}
