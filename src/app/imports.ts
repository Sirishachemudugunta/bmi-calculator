import { NgModule } from "@angular/core";
import { NodeService } from "../service/nodeservice";
import { Tree } from 'primeng/tree';
import { TreeSelect } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
    imports: [        
        Tree,
        TreeSelect,
        TreeTableModule],
    exports: [
        Tree,
        TreeSelect,
        TreeTableModule,
    ],
    providers: [ NodeService ]
  })
  export class ImportsModule {}