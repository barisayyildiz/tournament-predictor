import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Team from "./Team";

export default function Group({ name, teams, groups, setGroups }) {
  const [teamsState, setTeamsState] = useState(teams);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(teamsState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTeamsState(items);
    setGroups({ ...groups, [name]: items });
  };

  const getItemStyle = (isDragging, draggableStyle, index) => ({
    userSelect: "none",
    background: index <= 3 ? "lightgreen" : "white",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
  });

  return (
    <div className="group flex flex-col w-96 select-none shadow-md">
      <h2
        style={{
          backgroundColor: "#56C0FF",
        }}
        className="text-2xl p-3 text-white"
      >
        Group {name}
      </h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className="group flex flex-col  select-none"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {teamsState.map((item, index) => (
                <div className="group_row">
                  <Draggable
                    key={String(index)}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                          index
                        )}
                        className={`flex gap-4 bg-slate-50 hover:bg-slate-200 p-3 justify-start cursor-pointer`}
                      >
                        <p>{index + 1}</p>
                        <Team name={item} />
                      </div>
                    )}
                  </Draggable>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
